import {Menu} from "antd"
import React from "react";
import Link from "next/link";

const items = [
    {
        label: <Link href={'/'}>Server Time</Link>,
        key: '1'
    },
    {
        label: <Link href={'/upload'}>Upload</Link>,
        key: '2',
    },
    {
        label: <Link href={'/progressBar'}>Progress Bar</Link>,
        key: '3',
    },
    {
        label: <Link href={'/animalCard'}>Animal Card</Link>,
        key: '4',
    },
]

const Header = () => {
    return (
        <Menu mode={"horizontal"} theme={'dark'} items={items}/>
    )
}

export default Header