function Product(props) {
  return (
    <div>
      <img src={props.image} alt="sneakers" />
      <h4>{props.title}</h4>
      <p>{props.desc}</p>
      <h4>{props.price}</h4>
    </div>
  );
}

export default Product;
// https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/82/6142201/1.jpg?2933
