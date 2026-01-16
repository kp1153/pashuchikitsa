"use client";
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import jsPDF from 'jspdf';

export default function ParchaPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    pashupaalakNaam: '',
    phoneNumber: '',
    pashu: 'गाय',
    rog: '',
    doctor: 'डॉ. देवराज शुक्ला',
    tarikh: new Date().toLocaleDateString('hi-IN')
  });
  
  const [dawaiyan, setDawaiyan] = useState([
    { naam: '', khurak: '', din: '' }
  ]);

  useEffect(() => {
    const loggedIn = localStorage.getItem('isLoggedIn');
    if (!loggedIn) {
      router.push('/admin/login');
    }
  }, [router]);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleDawaiChange = (index, field, value) => {
    const newDawaiyan = [...dawaiyan];
    newDawaiyan[index][field] = value;
    setDawaiyan(newDawaiyan);
  };

  const addDawai = () => {
    setDawaiyan([...dawaiyan, { naam: '', khurak: '', din: '' }]);
  };

  const removeDawai = (index) => {
    const newDawaiyan = dawaiyan.filter((_, i) => i !== index);
    setDawaiyan(newDawaiyan);
  };

  const generatePDF = () => {
    const doc = new jsPDF();
    
    doc.setFontSize(20);
    doc.text('पशु चिकित्सक शुक्ला', 105, 20, { align: 'center' });
    doc.setFontSize(12);
    doc.text(formData.doctor, 105, 30, { align: 'center' });
    doc.text('तारीख: ' + formData.tarikh, 105, 40, { align: 'center' });
    
    doc.line(20, 45, 190, 45);
    
    doc.setFontSize(12);
    doc.text('पशुपालक का नाम: ' + formData.pashupaalakNaam, 20, 55);
    doc.text('फोन नंबर: ' + formData.phoneNumber, 20, 65);
    doc.text('पशु: ' + formData.pashu, 20, 75);
    doc.text('रोग/समस्या: ' + formData.rog, 20, 85);
    
    doc.text('दवाएं:', 20, 100);
    let yPos = 110;
    
    dawaiyan.forEach((dawai, index) => {
      doc.text((index + 1) + '. ' + dawai.naam, 25, yPos);
      doc.text('खुराक: ' + dawai.khurak, 40, yPos + 7);
      doc.text('दिन: ' + dawai.din, 40, yPos + 14);
      yPos += 25;
    });
    
    doc.text(formData.doctor, 150, 270);
    
    doc.save('parcha.pdf');
  };

  return (
    <div className="min-h-screen bg-zinc-50 p-4">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-[#006680] text-center mb-8">
          परचा लिखें
        </h1>

        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-700 font-bold mb-2">
                पशुपालक का नाम
              </label>
              <input
                type="text"
                name="pashupaalakNaam"
                value={formData.pashupaalakNaam}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                required
              />
            </div>

            <div>
              <label className="block text-gray-700 font-bold mb-2">
                फोन नंबर
              </label>
              <input
                type="tel"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-700 font-bold mb-2">
                पशु
              </label>
              <select
                name="pashu"
                value={formData.pashu}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg"
              >
                <option>गाय</option>
                <option>भैंस</option>
                <option>कुत्ता</option>
                <option>बिल्ली</option>
                <option>भेड़</option>
                <option>बकरी</option>
                <option>घोड़ा</option>
                <option>ऊँट</option>
              </select>
            </div>

            <div>
              <label className="block text-gray-700 font-bold mb-2">
                डॉक्टर
              </label>
              <select
                name="doctor"
                value={formData.doctor}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg"
              >
                <option>डॉ. देवराज शुक्ला</option>
                <option>डॉ. अश्विनी कुमार शुक्ला</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-gray-700 font-bold mb-2">
              रोग/समस्या
            </label>
            <textarea
              name="rog"
              value={formData.rog}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg h-24"
            />
          </div>

          <div>
            <div className="flex justify-between items-center mb-4">
              <label className="block text-gray-700 font-bold">
                दवाएं
              </label>
              <button
                onClick={addDawai}
                className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700"
              >
                + दवा जोड़ें
              </button>
            </div>

            {dawaiyan.map((dawai, index) => (
              <div key={index} className="border p-4 rounded-lg mb-4 bg-gray-50">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-2">
                  <input
                    type="text"
                    placeholder="दवा का नाम"
                    value={dawai.naam}
                    onChange={(e) => handleDawaiChange(index, 'naam', e.target.value)}
                    className="px-4 py-2 border border-gray-300 rounded-lg"
                  />
                  <input
                    type="text"
                    placeholder="खुराक"
                    value={dawai.khurak}
                    onChange={(e) => handleDawaiChange(index, 'khurak', e.target.value)}
                    className="px-4 py-2 border border-gray-300 rounded-lg"
                  />
                  <input
                    type="text"
                    placeholder="दिन"
                    value={dawai.din}
                    onChange={(e) => handleDawaiChange(index, 'din', e.target.value)}
                    className="px-4 py-2 border border-gray-300 rounded-lg"
                  />
                </div>
                {dawaiyan.length > 1 && (
                  <button
                    onClick={() => removeDawai(index)}
                    className="text-red-600 hover:text-red-800 font-bold"
                  >
                    हटाएं
                  </button>
                )}
              </div>
            ))}
          </div>

          <div className="flex gap-4 pt-4">
            <button
              onClick={generatePDF}
              className="w-full bg-[#006680] text-white font-bold py-3 rounded-lg hover:bg-[#004d61]"
            >
              PDF डाउनलोड करें
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}