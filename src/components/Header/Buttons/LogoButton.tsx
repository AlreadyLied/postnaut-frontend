import useNavigation from "@/hooks/useNavigation";

const LogoButton = () => {
  const { goToMain } = useNavigation()

  return (
    <button onClick={goToMain}>
      <img src="/logo.png" alt="Website Icon" className="w-auto h-20 mr-2" />
    </button>
  )
}

export default LogoButton
