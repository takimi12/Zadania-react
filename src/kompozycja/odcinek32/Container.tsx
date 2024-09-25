import {PropsWithChildren, ReactNode} from 'react';

type Props = {
    children: ReactNode;
}

// type Props = PropsWithChildren <{
//     title: string
//    }>

export const Container = ({children}: Props) => <div>{children}</div>