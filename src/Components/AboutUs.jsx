import React from "react";

const AboutUs = () => {
    return (
        <section className="relative w-full flex h-[730px]">

            <div className="w-1/2 bg-white px-12 flex flex-col justify-center">
                <h2 className="text-5xl font-extrabold text-gray-400 text-left mb-10">
                    About Us
                </h2>
                <p className="text-black leading-relaxed text-justify">
                    Lorem ipsum dolor sit amet consectetur. Lorem nec risus et tristique
                    arcu. Porttitor eget vel nisi lacinia et eget tortor urna. Erat ipsum
                    elementum quisque arcu. Proin hendrerit sed mattis lorem condimentum
                    amet velit sapien. Malesuada pharetra tincidunt sit commodo. Amet arcu
                    non non elementum iaculis amet vehicula amet praesent. Aliquet viverra
                    pellentesque facilisis ut est semper. Pharetra fusce aliquam ut
                    egestas. Dictumst molestie volutpat scelerisque consequat fames leo
                    interdum. Erat nunc ac eu lectus morbi integer non. Ullamcorper
                    adipiscing nec vivamus ut et magna cras vulputate. Non interdum id
                    cras ullamcorper eget. Mattis adipiscing mauris imperdiet etiam sapien
                    ac etiam ut. Aliquam nisl sit velit nibh facilisis aliquam non. Urna
                    et magna sed lectus egestas senectus. A mauris sagittis nunc enim
                    justo ornare erat proin diam. Sollicitudin porta magna lorem
                    suspendisse. Commodo diam malesuada nec adipiscing elementum. Orci
                    volutpat nunc amet sollicitudin risus nec sit nunc.
                </p>
            </div>


            <div className="w-2/3 h-full relative">
                <img
                    src="/about-us-bg.png"
                    alt="Background"
                    className="w-full h-full object-cover object-right"
                />


                <img
                    src="/auperson1.png"
                    alt="Person 1"
                    className="absolute top-20 left-48 w-52 h-56 object-cover shadow-lg"
                />


                <img
                    src="/auperson2.png"
                    alt="Person 2"
                    className="absolute bottom-20 left-96 w-56 h-60 object-cover shadow-lg"
                />
            </div>
        </section>
    );
};

export default AboutUs;
