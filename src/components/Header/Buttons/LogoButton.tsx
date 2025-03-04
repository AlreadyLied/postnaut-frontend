import useNavigation from '@/hooks/useNavigation'

const LogoButton = () => {
  const { goToMain } = useNavigation()

  return (
    <button onClick={goToMain}>
      <p className="w-20 h-20 p-2">
        LOGO
      </p>
    </button>
  )
}

export default LogoButton
