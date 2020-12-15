import React from 'react'

const Contact = (props) => {
  const { contactForm, deletContact } = props
  console.log(contactForm)

  // 无条件筛选，全部输出
  // return (
  //   contactForm.map(item => {
  //     return (
  //       <div key={item.id}>
  //         <div>{`name:${item.name}`}</div>
  //       </div>
  //     )
  //   })
  // )

  // if else判断
  // return (
  //   contactForm.map(item => {
  //     if (item.age >= 0) {
  //       return (
  //         <div key={item.id}>
  //           <div>{`name:${item.name}`}</div>
  //         </div>
  //       )
  //     } else {
  //       return null
  //     }
  //   })
  // )

  // 双目运算符
  // return (
  //   contactForm.map(item => {
  //     return(
  //       (item.age >= 30) && (
  //         <div key={item.id}>
  //         <div>{`name:${item.name}`}</div>
  //       </div>
  //     ) 
  //     )
  //   })
  // )

  // 三元运算符，显示年龄大于30岁的数据
  return (
    contactForm.map(item => {
      return (
        item.age >= 30 ? (
          <div key={item.id}>
            <div>{`name:${item.name}`}</div>
            <div>{`age:${item.age}`}</div>
            <div>{`sex:${item.sex}`}</div>
            <div>{`id:${item.id}`}</div>
            <button onClick={() => deletContact(item.id)}>删除数据</button>
          </div>
        ) : null
      )
    })
  )

}

export default Contact;