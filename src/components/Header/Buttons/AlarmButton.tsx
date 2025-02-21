import alarmIcon from '@/assets/icons/alarm.svg'

const AlarmButton = () => {
  return (
    <button className="px-2 py-2 flex flex-col items-center w-16">
      <img src={alarmIcon} alt="Alarm" className="w-8 h-8" />
    </button>
  )
}

export default AlarmButton
