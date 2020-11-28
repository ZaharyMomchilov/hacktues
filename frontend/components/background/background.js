import Image from 'next'

const Background = () => (
      <Image
        alt="Background"
        src="https://hacktues.pythonanywhere.com/static/frontend/background.svg"
        layout="fill"
        objectFit="cover"
        quality={100}
      />
)

export default Background