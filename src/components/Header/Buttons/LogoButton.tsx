import useNavigation from '@/hooks/useNavigation'
import LogoImage from '@/assets/LogoImage.svg'

const LogoButton = () => {
  const { goToMain } = useNavigation()

  return (
    <button onClick={goToMain} className="p2">
      <img src={LogoImage} className="w-20 h-20" />
    </button>
  )
}

export default LogoButton
