import "../styles/about.css";
import d1 from "../images/diabetes.jpg";
import d2 from "../images/di1.jpg";
import type1 from "../images/1.avif"
import type2 from "../images/2.avif"
import gestational from "../images/g.jpg"
import symptoms from "../images/symptoms.jpg"
import Navbar from "./Navbar";
import Footer from "./Footer";

function About() {
    return <>
        <Navbar />

        <div id="about">
            <img className="img1" src={d1} alt="" />

            {/* diabetes intro */}
            <div className="details">
                <div className="description">
                    <div>
                        <p className="qsn">DIABETES</p>
                        <p className="ans"> Diabetes mellitus, commonly referred to as diabetes, is a chronic medical condition characterized by elevated levels of blood glucose (or blood sugar) over a prolonged period. This condition arises either because the pancreas does not produce enough insulin, or the body's cells do not respond adequately to the insulin produced. Insulin is a hormone that plays a crucial role in regulating blood sugar by facilitating the uptake of glucose into cells, where it can be used for energy.</p>
                        <br />
                    </div>
                </div>
                <img className="diabetesimg" src={d2} alt="" />
            </div>


            {/* symptoms of diabetes */}
            <div className="details">
                <img className=" symptomsImg" src={symptoms} alt="" />
                <div className="description">
                    <div>
                        <p className="qsn"> SYMPTOMS OF DIABETES</p>
                        <p className="ans"> If you have any of the following diabetes symptoms, see your doctor about getting your blood sugar tested:
                            <ul>
                                <li>Urinate a lot, often at night</li>
                                <li>Are very thirsty and hungry</li>
                                <li>Lose weight without trying</li>
                                <li>Have blurry vision</li>
                                <li>Have numb or tingling hands or feet</li>
                                <li>Feel very tired</li>
                                <li>Have very dry skin</li>
                                <li>Have sores that heal slowly</li>
                                <li>Have more infections than usual</li>
                            </ul>
                        </p>
                        <br />
                    </div>
                </div>
            </div>


            {/* types of diabetes */}
            <div>
                {/* type1 */}
                <p className="qsn">TYPES OF DIABETES</p>
                <div className="typeList">
                    <div className="type">
                        <img src={type1} alt="" />
                        <div className="layer">
                            <h3>Type1 Diabetes</h3>
                            <p>Type 1 diabetes is where your blood glucose level is too high because your body can not make a hormone called insulin. This happens because your body attacks the cells in your pancreas that make the insulin.</p>
                        </div>
                    </div>
                    {/* type2 */}
                    <div className="type">
                        <img src={type2} alt="" />
                        <div className="layer">
                            <h3>Type2 Diabetes</h3>
                            <p>With type 2 diabetes the insulin your pancreas makes can’t work properly, or your pancreas can’t make enough insulin. This means your blood glucose levels keep rising. </p>

                        </div>
                    </div>
                    {/* gestational */}
                    <div className="type">
                        <img src={gestational} alt="" />
                        <div className="layer">
                            <h3>Gestational Diabetes</h3>
                            <p>Gestational diabetes is diabetes that can develop during pregnancy. It affects women who haven't been affected by diabetes before.This will include eating well and keeping active.</p>

                        </div>
                    </div>

                </div>




            </div>
        </div >



        {/* footer */}

        <Footer />
    </>
}
export default About;