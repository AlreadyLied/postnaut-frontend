import Swal from 'sweetalert2'
import useNavigation from '@/hooks/useNavigation'

const useAlert = () => {
  const { goToMain, goToLogin } = useNavigation()

  const showLoginSuccess = () => {
    return Swal.fire({
      icon: 'success',
      text: "Login Success",
      confirmButtonText: "Go To Main",
    }).then((result) => {
      if (result.isConfirmed) {
        goToMain()
      }
    })
  }

  const showRegisterSuccess = () => {
    return Swal.fire({
      icon: 'success',
      text: "Register Success",
      confirmButtonText: "Go To Login",
    }).then((result) => {
      if (result.isConfirmed) {
        goToLogin()
      }
    })
  }

  return {
    showLoginSuccess,
    showRegisterSuccess,
  }
}

export default useAlert
