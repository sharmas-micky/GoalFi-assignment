import "./App.css";
import Header from "./components/Header";
import MainSection from "./components/MainSection";
import image1 from "./images/startup_lauch.png";
import image2 from "./images/2. Kyc.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Section1 from "./components/Section1";
import image4 from "./images/empower.png";
import Section3 from "./components/Section3";
import image5 from "./images/Other 06.png";
import image6 from "./images/reminder.png";
import image7 from "./images/superhero.png";
import Section4 from "./components/Section4";

function App() {
  const settings = {
    // dots: true,
    infinite: true,
    speed: 200,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };
  return (
    <div className="container">
      <Header />
      <MainSection
        image={image1}
        text={
          "Start your money journey with the most powerful financial launchpad"
        }
        bgcolor={"black"}
        LeftBtn={"JOIN US"}
        RightBtn={"LEARN MORE"}
        textColor={"white"}
      />

      <Slider {...settings}>
        <div>
          <MainSection
            image={image2}
            text={"Automated KYC and Onboarding via Documents!"}
            bgcolor={"white"}
            textColor={"blue"}
          />
        </div>
        <div>
          <MainSection
            image={image2}
            text={"New Broker Integration!"}
            bgcolor={"white"}
            textColor={"blue"}
          />
        </div>
      </Slider>
      <Section1 />
      <Slider style={{ backgroundColor: "black !important" }} {...settings}>
        <div>
          <MainSection
            image={image2}
            text={"Investment Planning"}
            bgcolor={"black"}
            textColor={"white"}
          />
        </div>
        <div>
          <MainSection
            image={image2}
            text={"Insurance Planning"}
            bgcolor={"black"}
            textColor={"white"}
          />
        </div>
        <div>
          <MainSection
            image={image2}
            text={"Tax Planning"}
            bgcolor={"black"}
            textColor={"white"}
          />
        </div>
        <div>
          <MainSection
            image={image2}
            text={"Estate Planning"}
            bgcolor={"black"}
            textColor={"white"}
          />
        </div>
      </Slider>
      <Section3
        image={image4}
        text={
          "Empowering you with GoalFI financial planning and knowledge base APIs"
        }
        bgcolor={"white"}
        textColor={"blue"}
      />

      <Slider {...settings}>
        <div>
          <MainSection
            image={image2}
            text={"Stock Advisory Mutual Fund Advisory"}
            bgcolor={"blue"}
            textColor={"white"}
          />
        </div>
        <div>
          <MainSection
            image={image2}
            text={"Stocks Gold Mutual Funds Small Case"}
            bgcolor={"blue"}
            textColor={"white"}
          />
        </div>
        <div>
          <MainSection
            image={image2}
            text={"Tradetron Based Algo Products"}
            bgcolor={"blue"}
            textColor={"white"}
          />
        </div>
      </Slider>
      <Section3
        image={image4}
        text={"Deep GoalFi Insights using Integrated ML chatbot"}
        bgcolor={"white"}
        textColor={"blue"}
      />
      <MainSection
        image={image5}
        text={"Consent Driven Data Sharing"}
        bgcolor={"black"}
        RtBtnColor={"white"}
        textColor={"white"}
      />

      <Slider {...settings}>
        <Section3
          image={image4}
          text={"Manage Assets & Liabilities without Hassle"}
          bgcolor={"blue"}
          textColor={"white"}
        />
        <Section3
          image={image4}
          text={"Net Worth Analysis"}
          bgcolor={"blue"}
          textColor={"white"}
        />
        <Section3
          image={image4}
          text={"GoalFi Recommendations"}
          bgcolor={"blue"}
          textColor={"white"}
        />
      </Slider>

      <MainSection
        image={image4}
        text={"Personalized Expense Tracker to help you Save Effectively"}
        bgcolor={"white"}
        // LeftBtn = {'JOIN US'}
        RightBtn={"LEARN MORE"}
        RtBtnColor={"blue"}
        textColor={"black"}
      />

      <Section3
        image={image6}
        text={
          "Nuggets and Notifications so you dont miss a date and always on the top of your plans!"
        }
        bgcolor={"black"}
        textColor={"white"}
      />

      <MainSection
        image={image4}
        text={"Your Data Your Consent We take it Very seriously!"}
        bgcolor={"white"}
        // LeftBtn = {'JOIN US'}
        RightBtn={"LEARN MORE"}
        RtBtnColor={"blue"}
        textColor={"black"}
      />
      <MainSection
        image={image4}
        text={
          "Curated Products and Services based on your Risk Profile and Asset Allocation!"
        }
        bgcolor={"black"}
        // LeftBtn = {'JOIN US'}
        RightBtn={"START NOW"}
        RtBtnColor={"blue"}
        textColor={"gray"}
      />

      <Section3
        image={image4}
        text={"All Your Documents in One Place Secured in DigiLocker"}
        bgcolor={"blue"}
        textColor={"white"}
      />
      <Section3
        image={image4}
        text={"Get rewarded for each Step in your Financial Freedom Journey"}
        bgcolor={"black"}
        textColor={"white"}
      />
      <MainSection
        title={"Courses"}
        image={image4}
        text={"Learn Earn and Manage"}
        bgcolor={"blue"}
        RtBtnColor={"blue"}
        textColor={"white"}
      />
      <Section3
        image={image7}
        text={"Book a SuperHero for Expert Guidance!"}
        bgcolor={"white"}
        RtBtnColor={"blue"}
        textColor={"black"}
      />
      <Section4 title={"Our Superheros"} />
    </div>
  );
}

export default App;
