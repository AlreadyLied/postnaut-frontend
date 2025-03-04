import Swal from 'sweetalert2'
import useNavigation from '@/hooks/useNavigation'

const useAlert = () => {
  const { goToMain, goToLogin } = useNavigation()

  const showLoginSuccess = () => {
    return Swal.fire({
      icon: 'success',
      title: "Login Success",
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
      title: "Register Success",
      confirmButtonText: "Go To Login",
    }).then((result) => {
      if (result.isConfirmed) {
        goToLogin()
      }
    })
  }

  const showLoginFail = (message: string) => {
    return Swal.fire({
      icon: 'error',
      title: "Login Failed",
      text: message,
      confirmButtonText: "Retry",
    })
  }

  const showRegisterFail = (message: string) => {
    return Swal.fire({
      icon: 'error',
      title: "Register Failed",
      text: message,
      confirmButtonText: "Retry",
    })
  }

  const showLogout = () => {
    return Swal.fire({
      icon: 'success',
      title: "Logout",
      confirmButtonText: "Go To Main",
    }).then((result) => {
      if (result.isConfirmed) {
        goToMain()
      }
    })
  }

  return {
    showLoginSuccess,
    showRegisterSuccess,
    showLoginFail,
    showRegisterFail,
    showLogout,
  }
}

export default useAlert
