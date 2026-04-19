function ErrorMessage({ message }) {
  return (
    <div className="bg-red-50 border border-red-200 rounded-xl px-4 py-3 text-red-500 text-sm text-center">
      {message}
    </div>
  )
}

export default ErrorMessage