import React from 'react';

const Card = () => {
  return (
    <div className="my-20 mx-10 border-2 border-[rgba(75,30,133,0.5)] rounded-[1.5em] bg-gradient-to-br from-[rgba(75,30,133,1)] to-[rgb(75,30,133)] text-white font-nunito p-10 flex justify-center items-left flex-col gap-10 ">
      <div>
        <p className="text-4xl font-medium text-center">OUR VISION</p>
        <p className="text-2xl">
        Our vision is to cultivate a financially empowered generation by equipping students with the knowledge and skills to navigate the complexities of personal and professional finance. We aspire to foster a culture of financial literacy, where students confidently make informed decisions about budgeting, saving, and investing. By providing insights into diverse income opportunities and innovative entrepreneurial ventures, we aim to inspire financial independence and creativity.
        </p>
      </div>
      
    </div>
  );
}

export default Card;
