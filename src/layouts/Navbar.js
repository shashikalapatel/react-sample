const Navbar = () => {
  return (
    <>
      <div className="container-fluid fixed-top">
        <div className="container topbar bg-primary d-none d-lg-block">
          <div className="d-flex justify-content-between">
            <div className="top-info ps-2">
              <small className="me-3">
                <i className="fas fa-map-marker-alt me-2 text-secondary"></i>
                <a href="google.com" className="text-white">
                  Kajal fancy store, Gudiyari, Raipur
                </a>
              </small>
              <small className="me-3">
                <i className="fas fa-envelope me-2 text-secondary"></i>
                <a href="google.com" className="text-white">
                  shashikala.patel123@gmail.com
                </a>
              </small>
            </div>
            <div className="top-link pe-2">
              <a href="google.com" className="text-white">
                <small className="text-white ms-2">Admin Login</small>
              </a>
            </div>
          </div>
        </div>
        <div className="container px-0">
          <nav className="navbar navbar-light bg-white navbar-expand-xl">
            <a href="index.html" className="navbar-brand">
              <h1 className="text-primary display-6">FancyStore</h1>
            </a>
            {/* <button
              className="navbar-toggler py-2 px-3"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarCollapse"
            >
              <span className="fa fa-bars text-primary"></span>
            </button> */}
            <div
              className="collapse navbar-collapse bg-white"
              id="navbarCollapse"
            >
              {/* <div className="navbar-nav mx-auto">
                <a href="index.html" className="nav-item nav-link active">
                  Home
                </a>
                <a href="shop.html" className="nav-item nav-link">
                  Shop
                </a>
                <a href="shop-detail.html" className="nav-item nav-link">
                  Shop Detail
                </a>
                <div className="nav-item dropdown">
                  <a
                    href="google.com"
                    className="nav-link dropdown-toggle"
                    data-bs-toggle="dropdown"
                  >
                    Pages
                  </a>
                  <div className="dropdown-menu m-0 bg-secondary rounded-0">
                    <a href="cart.html" className="dropdown-item">
                      Cart
                    </a>
                    <a href="chackout.html" className="dropdown-item">
                      Chackout
                    </a>
                    <a href="testimonial.html" className="dropdown-item">
                      Testimonial
                    </a>
                    <a href="404.html" className="dropdown-item">
                      404 Page
                    </a>
                  </div>
                </div>
                <a href="contact.html" className="nav-item nav-link">
                  Contact
                </a>
              </div> */}
            </div>
          </nav>
        </div>
      </div>
      <div class="container-fluid py-5 mb-5 hero-header">
        <div class="container py-5">
          <div class="row g-5 align-items-center">
            <div class="col-md-12 col-lg-7">
              <h4 class="mb-3 text-secondary">100% Quality Product</h4>
              <h1 class="mb-5 display-3 text-primary">Fancy Store Shop</h1>
              <div class="position-relative mx-auto">
                <input
                  class="form-control border-2 border-secondary w-75 py-3 px-4 rounded-pill"
                  type="number"
                  placeholder="Search"
                />
              </div>
            </div>
            <div class="col-md-12 col-lg-5">
              <div
                id="carouselId"
                class="carousel slide position-relative"
                data-bs-ride="carousel"
              >
                <div class="carousel-inner" role="listbox">
                  <div class="carousel-item active rounded">
                    <img
                      src="img/hero-img-1.png"
                      class="img-fluid w-100 h-100 bg-secondary rounded"
                      alt="First slide"
                    />
                    <a
                      href="google.com"
                      class="btn px-4 py-2 text-white rounded"
                    >
                      Fruites
                    </a>
                  </div>
                  <div class="carousel-item rounded">
                    <img
                      src="img/hero-img-2.jpg"
                      class="img-fluid w-100 h-100 rounded"
                      alt="Second slide"
                    />
                    <a
                      href="google.com"
                      class="btn px-4 py-2 text-white rounded"
                    >
                      Vesitables
                    </a>
                  </div>
                </div>
                <button
                  class="carousel-control-prev"
                  type="button"
                  data-bs-target="#carouselId"
                  data-bs-slide="prev"
                >
                  <span
                    class="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span class="visually-hidden">Previous</span>
                </button>
                <button
                  class="carousel-control-next"
                  type="button"
                  data-bs-target="#carouselId"
                  data-bs-slide="next"
                >
                  <span
                    class="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span class="visually-hidden">Next</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
