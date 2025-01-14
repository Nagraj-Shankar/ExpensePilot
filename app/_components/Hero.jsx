import React from 'react'

function Hero() {
  return (
    <section  className="relative h-full bg-gradient-to-br from-sky-100 via-white to-sky-100 pl-2 pr-2 text-gray-800">
      <div className="absolute inset-x-0 top-[-55px] z-10 h-96 overflow-hidden text-gray-900/40 opacity-10 [mask-image:linear-gradient(to_top,transparent,white)]">
					<svg className="absolute inset-0 top-0 h-full w-full text-gray-900" xmlns="http://www.w3.org/2000/svg">
						<defs>
							<pattern
								id="pattern"
								width="32"
								height="32"
								patternUnits="userSpaceOnUse"
								x="50%"
								y="100%"
								patternTransform="translate(0 -1)"
							>
								<path d="M0 32V.5H32" fill="none" stroke="currentColor"></path>
							</pattern>
						</defs>
						<rect width="100%" height="100%" fill="url(#pattern)"></rect>
					</svg>
				</div>
  <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex ">
    <div className="mx-auto max-w-5xl text-center">
      <h1 className="text-3xl font-extrabold sm:text-5xl p-3">
      Navigate your finances with precision 
        <strong className="font-extrabold text-primary sm:block p-3"> <span className='text-gray-900'>using</span> ExpensePilot. </strong>
      </h1>

      <p className="mt-0 sm:text-xl/relaxed">
      From budgeting to tracking, we’re your co-pilot for a smoother financial journey. Sign up and take charge of your expenses now!
      </p>

      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <a
          className="block w-full rounded bg-primary px-12 py-3 text-sm font-medium text-white shadow hover:bg-blue-700 focus:outline-none focus:ring active:bg-blue-800 sm:w-auto"
          href="/sign-in"
        >
          Get Started
        </a>
      </div>
    </div>
  </div>
</section>
  )
}

export default Hero
