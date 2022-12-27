AOS.init();

//  Work experience cards

const experiencecards = document.querySelector(".experience-cards");
const exp = [
  {
    title: "Summer Intern",
    cardImage: "assets/images/experience-page/Samyak-Logo.jpg",
    place: "Samyak IT Solutions Pvt Ltd",
    time: "(June, 2022 - August, 2022)",
    desp: "<li>Programming Language (Java).</li> <li>Mobile App Development (Android Studio/Swing/Java).</li> <li>Project- User Login App.</li>",
  },
  {
    title: "Intern",
    cardImage: "assets/images/experience-page/itu-universe.jpg",
    place: "IT Universe Techsol Pvt Ltd",
    time: "(November, 2021 - February, 2022)",
    desp: "<li>Website Design.</li><li>WordPress.</li><li>Project- WordPress Website.</li>",
  },
  {
    title: "Team Member",
    cardImage: "assets/images/experience-page/devsnest.png",
    place: "Devsnest Community",
    time: "(July, 2021 - Present)",
    desp: "<li>Web-Development.</li><li>Data Structure & Algorithms (DSA).</li><li>Mini-Projects such as Websites.</li>",
  },
];

const showCards2 = () => {
  let output = "";
  exp.forEach(
    ({ title, cardImage, place, time, desp }) =>
      (output += `        
    <div class="col gaap" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="400"> 
      <div class="card card1">
        <img src="${cardImage}" class="featured-image"/>
        <article class="card-body">
          <header>
            <div class="title">
              <h3>${title}</h3>
            </div>
            <p class="meta">
              <span class="pre-heading">${place}</span><br>
              <span class="author">${time}</span>
            </p>
            <ol>
              ${desp}
            </ol>
          </header>
        </article>
      </div>
    </div>
      `)
  );
  experiencecards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards2);

// Volunteership Cards

const volunteership = document.querySelector(".volunteership");
const volunteershipcards = [
  {
    title: "40 Days of Code",
    cardImage: "assets/images/experience-page/D40.png",
    description:
      "Contributing and Learning the Data Structures Algorithms and Web-development with Projects.",
  },
  {
    title: "100 Days of Code",
    cardImage: "assets/images/experience-page/D100.jpg",
    description:
      "Responsible for handling open source contributions for the project Awesome Developer Portfolio.",
  },
  {
    title: "Devsnest Community",
    cardImage: "assets/images/experience-page/devsnestC.jpg",
    description:
      "Learning and implementing the projects of Frontend & Backend Development.",
  },
  {
    title: "GeeksForGeeks",
    cardImage: "assets/images/experience-page/gfg.jpg",
    description:
      "Learning and Continuing the DSA Concepts & Other Skills.",
  },
  {
    title: "Github",
    cardImage: "assets/images/experience-page/github.png",
    description:
      "Responsible for handling open source contributions for the project Awesome Developer Portfolio.",
  },
  {
    title: "HackerRank",
    cardImage: "assets/images/experience-page/hR.png",
    description:
      "Open Source Community for Practicing the Daily Problem-Solving Questions for Solving.",
  },
  {
    title: "LeetCode",
    cardImage: "assets/images/experience-page/lc.png",
    description:
      "Open Source Community for Practicing the Daily Problem-Solving Questions for Solving.",
  },
];

const showCards = () => {
  let output = "";
  volunteershipcards.forEach(
    ({ title, cardImage, description }) =>
      (output += `        
      <div class="card volunteerCard" data-aos="fade-down" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="600" style="height: 550px;width:400px">
      
      <img src="${cardImage}" height="250" width="65" class="card-img" style="border-radius:10px">
      <div class="content">
          <h2 class="volunteerTitle">${title}</h2><br>
          <p class="copy">${description}</p></div>
      
      </div>
      `)
  );
  volunteership.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards);

// Hackathon Section

const hackathonsection = document.querySelector(".hackathon-section");
const mentor = [
  {
    title: "Hackathon Fest",
    subtitle: "Devsnest",
    image: "assets/images/experience-page/devsnestC.jpg",
    desp: "Contributing with the Team in Devsnest Community in Making website Projects.",
    href: "",
  },
];

const showCards3 = () => {
  let output = "";
  mentor.forEach(
    ({ title, image, subtitle, desp, href }) =>
      (output += `  
      <div class="blog-slider__item swiper-slide">
        <div class="blog-slider__img">
            <img src="${image}" alt="">
        </div>
        <div class="blog-slider__content">
          <div class="blog-slider__title">${title}</div>
          <span class="blog-slider__code">${subtitle}</span>
          <div class="blog-slider__text">${desp}</div>
          <a href="${href}" class="blog-slider__button">Read More</a>   
        </div>
      </div>
      `)
  );
  hackathonsection.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards3);
