<template>
<div id="contacts">
      <div class="contactsection">
        <div class="contactwords">
          <div class="info">
            <div class="info-align">
              <h3>Location</h3>
              <div>
                <p>
                  <i class="fas fa-map-pin"></i>
                  Plumstead, Cape Town, South Africa
                </p>
              </div>
            </div>
            <div class="info-align">
              <h3>Call me</h3>
              <p><i class="fas fa-phone-alt"></i>064 558 7415</p>
            </div>
            <div class="info-align">
              <h3>Email me</h3>
              <p><i class="fas fa-envelope"></i>mattymallison@gmail.com</p>
            </div>
            <div class="icons2">
              <a href="https://github.com/matty-allison" target="_blank"
                ><i class="fab fa-github"></i
              ></a>
              <a
                href="https://www.linkedin.com/in/matthew-morne-allison-97254a1b2/"
                target="_blank"
                ><i class="fab fa-linkedin-in"></i
              ></a>
              <a
                href="https://app.netlify.com/teams/matty-allison/overview"
                target="_blank"
                ><i class="fas fa-globe"></i
              ></a>
            </div>
          </div>
        </div>
        <form
          action="https://formspree.io/f/xayaeeap"
          method="POST"
          id="contact-form"
        >
          <div class="contact-form-details">
            <input
              class="contact-input"
              type="text"
              name="full_name"
              id="full_name"
              placeholder="Name"
              required
            />
            <input
              class="contact-input"
              type="tel"
              name="contact_no"
              id="contact_no"
              placeholder="Contact No"
              required
            />
            <input
              class="contact-input"
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              required
            />
            <textarea
              class="contact-input"
              name="message"
              id="message"
              placeholder="Type your message here"
            ></textarea>
            <div class="btn2space">
              <button class="btn2" type="submit">Submit</button>
            </div>
          </div>
        </form>
      </div>
</div>
</template>

<script>

export default {
}
</script>

<style>
#contacts {
  background-color: none;
  box-shadow: 0 5px 25px gold;
  backdrop-filter: blur( 5px );
  -webkit-backdrop-filter: blur( 5px );
  border-radius: 15px;
  font-size: 115%;
  position: fixed;
  top: 11%;
  right: 13.5%;
  width: 65%;
  height: 60%;
  padding: 4%;
}

.contactsection {
  display: flex;
  justify-content: space-evenly;
}

.contactwords {
  display: flex;
  flex-direction: column;
}

.info {
  display: flex;
  gap: 60px;
  flex-direction: column;
}

.info-align {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 60px;
}

.info-align i {
  font-size: 20px;
  margin-right: 10px;
}

.info h3 {
  text-decoration: underline;
}

.icons2 {
  display: flex;
  gap: 40px;
  font-size: 30px;
}

.icons2 a {
  color: white;
  text-decoration: none;
}

.icons2 a:hover {
  transition: ease-in 0.4s;
  text-shadow: 0px 5px 25px gold;
}

.contact-input {
  outline: none;
  border: none;
  border-bottom: 1px solid gold;
  padding-top: 3%;
  padding-bottom: 3%;
  margin: 0 0 20px 0;
  background: none;
  font-size: 15px;
  color: white;
}

.contact-form-details {
  display: flex;
  flex-direction: column;
  height: 480px;
  width: 500px;
  gap: 30px;
  padding: 35px;
  border: 1px solid #abd7eb;
  box-shadow: 0px 5px 25px gold;
  border-radius: 25px;
  backdrop-filter: blur(2px);
}

.btn2 {
  color: gold;
  text-decoration: none;
  cursor: pointer;
  justify-content: center;
  display: flex;
  align-items: center;
  border: 1px solid;
  width: 200px;
  height: 50px;
  border-radius: 25px;
  background: none;
  font-size: 15px;
  outline: none;
}

.btn2:hover {
  transition: ease-in 0.3s;
  background-color: gold;
  color: black;
  border: 2px solid var(--secondary-color);
  box-shadow: 0px 5px 20px gold;
}

.btn2space {
  display: flex;
  justify-content: center;
}
</style>