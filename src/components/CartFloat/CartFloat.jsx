import { useState } from 'react'
import './CartFloat.scss'

const CartFloat = () => {
  // eslint-disable-next-line no-unused-vars
  const [count, setCount] = useState(0)

  return (
    <button className="cart-float" id="cartFloat">
      🛒
      <div className="cf-badge" id="cfBadge">{count}</div>
    </button>
  )
}

export default CartFloat