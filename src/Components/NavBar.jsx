import React from 'react'


import logo from '../assets/logo.svg';

const NavBar1 = () => {
  return (
		<nav className="flex justify-between items-center pl-2">
			<a href="#">
				<img src={logo} alt="logo" className="h-24 w-24" />
			</a>

			<ul className="flex w-1/2 justify-between font-custom text-lg px-20">
				<li>
					<a href="#">Products</a>
				</li>
				<li>
					<a href="#">About</a>
				</li>
				<li>
					<a href="#">Support</a>
				</li>
			</ul>
		</nav>
	);

};

const NavBar2 = () => {
  return (
		<nav className="flex justify-between items-center pl-2">
			<p className='text-2xl'>Buds</p>
			<ul className="flex w-1/2 justify-between font-custom text-lg px-20">
				<li>
					<a href="#">Overview</a>
				</li>
				<li>
					<a href="#">Features</a>
				</li>
				<li>
					<a href="#">Spec</a>
				</li>
				<li>
					<button className="uppercase bg-orange text-white py-2 px-4">
						Buy Now
					</button>
				</li>
			</ul>
		</nav>
	);
  };

const NavBar = () => {
  return (
		<div className="bg-half_white uppercase">
      <NavBar1/>
      <NavBar2/>

		</div>
	);
};



export default NavBar

