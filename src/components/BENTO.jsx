import React from 'react'
import bento1 from '../images/bento1.jpg';
import bento2 from '../images/bento2.jpg';
import bento3 from '../images/bento3.jpg';
import bento4 from '../images/bento4.jpg';
import bento5 from '../images/bento5.jpg';

function BENTO() {
  return (
    <div className="px-4 py-8 bg-purple-100 rounded-2xl max-w-6xl mx-auto mt-20">
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 rounded-xl">
      
      {/* Item 1 */}
      <div className="rounded-xl overflow-hidden">
        <img src={bento1} alt="bento1" className="w-full h-48 object-cover rounded-xl" />
      </div>
  
      {/* Item 2 */}
      <div className="sm:col-span-1 lg:col-span-2 rounded-xl overflow-hidden">
        <img src={bento2} alt="bento2" className="w-full h-48 object-cover rounded-xl" />
      </div>
  
      {/* Item 3 */}
      <div className="sm:col-span-2 rounded-xl overflow-hidden">
        <img src={bento3} alt="bento3" className="w-full h-48 object-cover rounded-xl" />
      </div>
  
      {/* Item 4 */}
      <div className="rounded-xl overflow-hidden">
        <img src={bento4} alt="bento4" className="w-full h-48 object-cover rounded-xl" />
      </div>
  
      {/* Item 5 */}
      <div className="sm:col-span-2 rounded-xl bg-amber-50 overflow-hidden">
        <img src={bento5} alt="bento5" className="w-full h-48 object-contain rounded-xl" />
      </div>
  
    </div>
  </div>
  

  )}

export default BENTO