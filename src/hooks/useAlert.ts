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

  const showPostSuccess = () => {
    return Swal.fire({
      icon: 'success',
      title: "Post Success",
      confirmButtonText: "OK",
    })
  }

  const showPostFail = (message: string) => {
    return Swal.fire({
      icon: 'error',
      title: "Post Failed",
      text: message,
      confirmButtonText: "Try Again",
    })
  }

  return {
    showLoginSuccess,
    showRegisterSuccess,
    showLoginFail,
    showRegisterFail,
    showLogout,
    showPostSuccess,
    showPostFail,
  }
}

export default useAlert
