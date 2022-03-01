import React from "react";

const Menu = ({ allclubs }) => {
  return (
    <div className="section-center">
      {allclubs.map((allclub) => {
        const { id, title, img, desc, price } = allclub;
        return (
          <article key={id} className="menu-item">
            <img src={img} alt={title} className="photo" />
            <div className="item-info">
              <header>
                <h4>{title}</h4>
                <h4 className="price">${Math.floor(price) * 10}Million</h4>
              </header>
              <p className="item-text">{desc}</p>
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default Menu;
