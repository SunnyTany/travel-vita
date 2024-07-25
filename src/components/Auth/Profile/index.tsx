

const Profile = () => {
  // const { username } = useSelector((state: RootState) => state.auth)
  const username = "Татьяна Колкова"

  return (
    <form>
      <h2>Мой профиль</h2>
      <h3>{username}</h3>
      <img src="" alt="" />
      <form action="">
        <input type="file" placeholder="Загрузить фото" />
        <button>Сохранить</button>
      </form>
      <h3>Мои туры</h3>
      <h3>Мои отзывы</h3>
      <h3>Мои комментарии</h3>
      <button>Выйти</button>
      <button>Удалить аккаунт</button>
    </form>
  )
}

export default Profile