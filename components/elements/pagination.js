function pagination() {
  return (
    <div className="pagination-area mb-30 wow fadeInUp animated">
      <nav aria-label="Page navigation example">
        <ul className="pagination justify-content-start">
          <li className="page-item">
            <Link href="/#">
              <a className="page-link">
                <i className="elegant-icon arrow_left"></i>
              </a>
            </Link>
          </li>
          <li className="page-item active">
            <Link href="/#">
              <a className="page-link">01</a>
            </Link>
          </li>
          <li className="page-item">
            <Link href="/#">
              <a className="page-link">02</a>
            </Link>
          </li>
          <li className="page-item">
            <Link href="/#">
              <a className="page-link">03</a>
            </Link>
          </li>
          <li className="page-item">
            <Link href="/#">
              <a className="page-link">04</a>
            </Link>
          </li>
          <li className="page-item">
            <Link href="/#">
              <a className="page-link">
                <i className="elegant-icon arrow_right"></i>
              </a>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default pagination;
