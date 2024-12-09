import React from 'react'

const User = () => {
  return (
    <div>
      <li class="leaf myaccount"><a href="#" title="My Account  "><em class="bgSpriteSignIn"></em><span>My Account </span></a><div class="user-login-menu"><div class="my_account_wrap"><div class="user_wrap"><img src="https://imgcdn.floweraura.com/ssr-build/static/media/signin.acb7d4e3.svg" alt="Amit" title="Amit"/><span class="user-name">Kunal Rajput</span><div class="user_info"><span class="mobno">8057685687</span> | <span class="user_mail">kr4979704@gmail.com</span></div><a href="/profile">Edit</a></div><ul class="links user-menu-link"><li class="item0"><a href="/my-orders" title="My Orders">My Orders</a></li><li class="item1"><a href="/my-address" title="Manage Address">Manage Address</a></li><li class="item2"><a href="/my-reviews" title="My Reviews">My Reviews</a></li><li class="item3"><a href="/my-occasion" title="My Occasions">My Occasions</a></li><li class="item4"><a href="/cards" title="My Cards">My Cards</a></li><li class="item5"><a href="javascript:void(0)" title="Logout" class="logout-first-btn">Logout</a></li></ul></div></div></li>
    </div>
  )
}

export default User
