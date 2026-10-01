import { useState } from 'react'

export default function UserProfile() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [isAdmin, setIsAdmin] = useState(false)
  const [isDeleteConfirmationOpen, setIsDeleteConfirmationOpen] =
    useState(false)

  const userName = 'Дзангиев Магамед Вахаевич'

  function handleDeleteAccount() {
    setIsLoggedIn(false)
    setIsAdmin(false)
    setIsDeleteConfirmationOpen(false)
  }

  let profileContent

  if (!isLoggedIn) {
    profileContent = (
      <div className="profile-content">
        <p>Вы не авторизованы</p>
        <div className="profile-actions">
          <button
            className="button button-primary"
            type="button"
            onClick={() => setIsLoggedIn(true)}
          >
            Войти
          </button>
        </div>
      </div>
    )
  } else {
    profileContent = (
      <div className="profile-content">
        <p>Добро пожаловать!</p>
        <p className="profile-name">{userName}</p>
        <p className="profile-role">
          {isAdmin ? 'Панель администратора' : 'Вы обычный пользователь'}
        </p>
        <div className="profile-actions">
          <button
            className="button button-primary"
            type="button"
            onClick={() => setIsLoggedIn(false)}
          >
            Выйти
          </button>
        </div>
      </div>
    )
  }

  return (
    <section className="profile" aria-labelledby="profile-title">
      <h2 id="profile-title">Статус аккаунта</h2>
      {profileContent}

      {isLoggedIn && (
        <button
          className="button button-danger"
          type="button"
          onClick={() => setIsDeleteConfirmationOpen(true)}
        >
          Удалить аккаунт
        </button>
      )}

      {isDeleteConfirmationOpen && (
        <div
          className="confirmation"
          role="alertdialog"
          aria-modal="true"
          aria-labelledby="delete-confirmation-title"
        >
          <h3 id="delete-confirmation-title">Удалить аккаунт?</h3>
          <p>Это действие завершит текущий сеанс.</p>
          <div className="confirmation-actions">
            <button
              className="button button-danger"
              type="button"
              onClick={handleDeleteAccount}
            >
              Да, удалить
            </button>
            <button
              className="button button-secondary"
              type="button"
              onClick={() => setIsDeleteConfirmationOpen(false)}
            >
              Отмена
            </button>
          </div>
        </div>
      )}
    </section>
  )
}