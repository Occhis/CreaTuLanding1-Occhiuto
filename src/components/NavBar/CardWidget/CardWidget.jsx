import cart from './assets/cart.svg';
const CardWidget = () => {
    return (
        <div>
            <img src={cart} alt="cart-widget"width={32} height={32} />
            0
        </div>
    );
}
export default CardWidget;