const Footer = () => {
  return (
    <>
      <div class="container-fluid bg-dark text-white-50 footer pt-5 mt-5">
        <div class="container py-5">
          <div
            class="pb-4 mb-4"
            // style="border-bottom: 1px solid rgba(226, 175, 24, 0.5)"
          >
            <div class="row g-4">
              <div class="col-lg-12">
                <a href="google.com">
                  <h1 class="text-primary mb-0">FancyStore</h1>
                  <p class="text-secondary mb-0">Fresh products</p>
                </a>
              </div>
            </div>
          </div>
          <div class="row g-5">
            <div class="col-lg-3 col-md-6">
              <div class="footer-item">
                <h4 class="text-light mb-3">Why People Like us!</h4>
                <p class="mb-4">
                  typesetting, remaining essentially unchanged. It was
                  popularised in the 1960s with the like Aldus PageMaker
                  including of Lorem Ipsum.
                </p>
                <a
                  href="google.com"
                  class="btn border-secondary py-2 px-4 rounded-pill text-primary"
                >
                  Read More
                </a>
              </div>
            </div>
            <div class="col-lg-3 col-md-6">
              <div class="d-flex flex-column text-start footer-item">
                <h4 class="text-light mb-3">Shop Info</h4>
                <a class="btn-link" href="google.com">
                  About Us
                </a>
                <a class="btn-link" href="google.com">
                  Contact Us
                </a>
                <a class="btn-link" href="google.com">
                  Privacy Policy
                </a>
                <a class="btn-link" href="google.com">
                  Terms & Condition
                </a>
                <a class="btn-link" href="google.com">
                  Return Policy
                </a>
                <a class="btn-link" href="google.com">
                  FAQs & Help
                </a>
              </div>
            </div>
            <div class="col-lg-3 col-md-6">
              <div class="d-flex flex-column text-start footer-item">
                <h4 class="text-light mb-3">Account</h4>
                <a class="btn-link" href="google.com">
                  My Account
                </a>
                <a class="btn-link" href="google.com">
                  Shop details
                </a>
                <a class="btn-link" href="google.com">
                  Shopping Cart
                </a>
                <a class="btn-link" href="google.com">
                  Wishlist
                </a>
                <a class="btn-link" href="google.com">
                  Order History
                </a>
                <a class="btn-link" href="google.com">
                  International Orders
                </a>
              </div>
            </div>
            <div class="col-lg-3 col-md-6">
              <div class="footer-item">
                <h4 class="text-light mb-3">Contact</h4>
                <p>Address: 1429 Netus Rd, NY 48247</p>
                <p>Email: Example@gmail.com</p>
                <p>Phone: +0123 4567 8910</p>
                <p>Payment Accepted</p>
                <img src="img/payment.png" class="img-fluid" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="container-fluid copyright bg-dark py-4">
        <div class="container">
          <div class="row">
            <div class="col-md-6 text-center text-md-start mb-3 mb-md-0">
              <span class="text-light">
                <a href="google.com">
                  <i class="fas fa-copyright text-light me-2"></i>
                  Kajalfancystore
                </a>
                , All right reserved.
              </span>
            </div>
            {/* <div class="col-md-6 my-auto text-center text-md-end text-white">
              Designed By
              <a class="border-bottom" href="https://htmlcodex.com">
                HTML Codex
              </a>
              Distributed By
              <a class="border-bottom" href="https://themewagon.com">
                ThemeWagon
              </a>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
