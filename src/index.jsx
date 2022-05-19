import React from 'react'
import ReactLoading from 'react-loading'

function Preloader({ duration }) {
  const [preload, setPreload] = React.useState(true)

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setPreload(false)
    }, duration)
    return () => clearTimeout(timer)
  }, [])
  if (preload) {
    return (
      <div className="blocking-div">
        <div className="loader-div">
          <ReactLoading type="bars" color="#02ac4e" height={100} width={100} />
          <div className="loading-text">Loading ...</div>
        </div>
        <style jsx>{`
          .blocking-div {
            width: 100%;
            position: relative;
          }
          .loader-div {
            position: fixed;
            width: 100%;
            min-height: 100vh;
            max-height: 100vh;
            height: 100vh;
            background: #f7f7f7;
            opacity: 1;
            z-index: 9999;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            overflow: hidden;
          }
          .loading-text {
            margin-top: 2em;
            color: #02ac4e;
          }
        `}</style>
      </div>
    )
  }
  return <></>
}

export default Preloader
