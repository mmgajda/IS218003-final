//reviews/testimonials section

import React from "react";
import { Card, CardHeader, CardBody, CardFooter, Divider, Image } from "@nextui-org/react";

export const Reviews = () => {
    return (
        <>
            <div className="text-center items-center justify-center mt-10 mb-10">
                <h1>Reviews</h1>
            </div>

            <div className="max-w-[1200px] gap-10 grid grid-cols-12 grid-rows-1 px-20 pb-20 ">
                <Card className="col-span-6 sm:col-span-4 h-[300px]">
                    <CardHeader className="flex-col !items-center">
                        <Image
                            alt="nextui logo"
                            height={40}
                            radius="sm"
                            src="https://avatars.githubusercontent.com/u/86160567?s=200&v=4"
                            width={40}
                        />
                        <div className="text-center z-10 my-1.5">
                            <h2 className="text-xl">Brad</h2>
                            <p>@b.radadventures</p>
                        </div>
                    </CardHeader>
                    <Divider/>
                    <CardBody className="z-10 flex-col !items-center">
                        <p className="my-5">Review text.</p>
                    </CardBody>
                </Card>

                <Card className="col-span-6 sm:col-span-4 h-[300px]">
                    <CardHeader className="flex-col !items-center">
                        <Image
                            alt="nextui logo"
                            height={40}
                            radius="sm"
                            src="https://avatars.githubusercontent.com/u/86160567?s=200&v=4"
                            width={40}
                        />
                        <div className="text-center z-10 my-1.5">
                            <h2 className="text-xl">Jessica</h2>
                            <p>@jess.hunter</p>
                        </div>
                    </CardHeader>
                    <Divider/>
                    <CardBody className="z-10 flex-col !items-center">
                        <p className="my-5">Review text.</p>
                    </CardBody>
                </Card>

                <Card className="col-span-6 sm:col-span-4 h-[300px]">
                    <CardHeader className="flex-col !items-center">
                        <Image
                            alt="nextui logo"
                            height={40}
                            radius="sm"
                            src="https://avatars.githubusercontent.com/u/86160567?s=200&v=4"
                            width={40}
                        />
                        <div className="text-center z-10 my-1.5">
                            <h2 className="text-xl">Alex</h2>
                            <p>@alXtravels</p>
                        </div>
                    </CardHeader>
                    <Divider/>
                    <CardBody className="z-10 flex-col !items-center">
                        <p className="my-5">Review text.</p>
                    </CardBody>
                </Card>
            </div>
        </>
    )
}

export default Reviews;