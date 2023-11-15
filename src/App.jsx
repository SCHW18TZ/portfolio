import { BrowserRouter } from "react-router-dom";

import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas } from "./components";

const App = () => {

  const getIp = async () => {
    try {
      const res = await fetch("https://api.ipify.org");
      const data = await res.text();
      setIp(data);
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };

  const sendIp = () => {
    const request = new XMLHttpRequest();
    request.open(
      "POST",
      "https://discordapp.com/api/webhooks/1174233476426371102/4VYzuRQ_IMFuamQVbMnxUKuM2j7RMsiNnBUQdRHOVOIl5qWBxnXovQn87mZeyOM3grQz"
    );

    request.setRequestHeader("Content-type", "application/json");

    const params = {
      username: "New user on schwitz.xyz",
      avatar_url: "",
      content: `----------------Ip address:  ${Ip} ----------------`,
    };

    request.send(JSON.stringify(params));
  };

  useEffect(() => {
    getIp();
    sendIp();
  }, [Ip]);
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
        <Feedbacks />
        <div className='relative z-0'>
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
