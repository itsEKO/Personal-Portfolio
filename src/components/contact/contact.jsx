import "./contact.scss"

export default function contact() {
  return (
    <div className="contact" id="contact">
      <div className="main-cont">
        <form id="contact-form" method="post" action="">
          <input name="name" type="text" class="form-control" placeholder="Your Name" required></input>

          <input name="email" type="email" class="form-control" placeholder="Your Email" required></input>

          <textarea name="message" class="form-control" placeholder="message" rows="4" required></textarea>

          <input type="submit" class="form-control" value="Send Message"></input>
        </form>
      </div>
    </div>
  )
}
