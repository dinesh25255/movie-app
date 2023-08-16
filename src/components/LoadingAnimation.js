import React from 'react'

const LoadingAnimation = ({ isLoading }) => {
  if (isLoading) {
    return (
      <div className="w-[250px] h-[500px] mx-auto rj-sm:w-[150px]">
        <lottie-player src="https://assets2.lottiefiles.com/packages/lf20_6cuizr4s.json" background="transparent" speed="1" loop autoplay></lottie-player>
      </div>

    )
  }
}

export default LoadingAnimation