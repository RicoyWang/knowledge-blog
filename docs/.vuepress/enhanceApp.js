// import vue from 'vue/dist/vue.esm.browser'
export default ({
  Vue, // VuePress 正在使用的 Vue 构造函数
  options, // 附加到根实例的一些选项
  router, // 当前应用的路由实例
  siteData // 站点元数据
}) => {
  // window.Vue = vue // 使页面中可以使用Vue构造函数 （使页面中的vue demo生效）
  setTimeout(() => {
    // var myImageContainer = document.querySelector('.box-img')
    // var myImage = myImageContainer.querySelector('img')

    // // Attach click event to the image container
    // myImageContainer.addEventListener('click', function () {
    //   // Create a new container for the preview
    //   var preview = document.createElement('div')
    //   preview.id = 'preview'

    //   // Create a new image for the preview
    //   var previewImage = document.createElement('img')
    //   previewImage.src = myImage.src
    //   previewImage.alt = 'Preview'

    //   // Append the preview image to the container
    //   preview.appendChild(previewImage)

    //   // Append the preview container to the body
    //   document.body.appendChild(preview)

    //   // Show the preview container
    //   preview.style.display = 'flex'

    //   // Close the preview on clicking outside the image
    //   preview.addEventListener('click', function (event) {
    //     if (event.target === preview) {
    //       // Remove the preview container from the body
    //       document.body.removeChild(preview)
    //     }
    //   })
    // })
  }, 2000)
}
