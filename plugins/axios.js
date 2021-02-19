export default function ({
  $axios,
  redirect,
  context
}) {

  $axios.interceptors.request.use(
    config => {
      return config
    },
    error => {
      return Promise.reject(error)
    }
  )

  $axios.onRequest(config => {
    console.log('Making request to ' + config.url)
  })

  $axios.interceptors.response.use(
    response => {
      if (response.status === 200) {
        return response.data;
      } else {
        redirect('/')
      }
      return Promise.reject(response)
    },
    error => {
      // context.error({ statusCode: 404, message: '页面未找到或无数据' }) //跳转
      return Promise.reject(error)
    }
  )

  $axios.onError(error => {
    console.log(error)
    const code = parseInt(error.response && error.response.status)
    if (code === 400) {
      redirect('/')
    } else if (code === 500) {
      redirect('/')
    }
  })
}
