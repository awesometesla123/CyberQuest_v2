import { offeredInfo } from '../constants/index.js'
import styles from '../style.js'
import { useEffect } from 'react';
import '../index.css';
import '../animations.js';

const OfferedInfo = () => {
    return (
    <section className = "flex-col py-[300px]">
        <div className = "flex-col text-center xs:mb-[40px] mb-[30px]">
            <h1 className = "text-white font-poppins font-bold xs:text-[50px] text-[40px]">What CyberQuest Offers</h1>
            <p className = "text-white font-poppins font-semibold xs:text-[15px] text-[10px]">Find out what you can learn with CyberQuest</p>
        </div>
        <div className = {`${styles.flexCenter}  flex-row sm:mb-20 mb-6 flex-wrap`}>
            {offeredInfo.map((info) => (
                <div key = {info.id} className = "px-[60px] flex-col ">
                    <div className = "flex justify-center items-center">
                        <img src = {info.icon} className = "mb-[-69px]"></img>
                    </div>
                    <div className = {`bg-gradient-to-b from-${info.color} rounded-2xl p-[1px] xs:h-[300px] w-[400px]`}>
                        <div className = {` flex items-center justify-center bg-box rounded-2xl text-white h-full`}>
                            <div className = "font-bold font-poppins flex-col text-center p-[20px]">
                                {info.title}
                                <p className = "mt-[10px] font-normal text-center xs:text-[15px] text-[10px] xs:leading-[26px] leading-[21px]">{info.desc}</p>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </section>
    );
};

export default OfferedInfo