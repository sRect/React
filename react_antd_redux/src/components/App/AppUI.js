import React from 'react'
import { Button, Input } from 'antd'

const AppUI = () => {
  return (
    <div>
      <section>
        <Input placeholder="请输入..." type="text" size="small" />
        <Button type="primary">add</Button>
      </section>
    </div>
  )
}

export default AppUI