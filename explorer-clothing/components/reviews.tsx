//reviews/testimonials section

import React from "react";
import { Card, CardHeader, CardBody, CardFooter, Divider, Image } from "@nextui-org/react";

export const Reviews = () => {
    return (
        <>
            <div className="w-full gap-10 grid grid-cols-12 grid-rows-1 px-20 pb-20 ">
                <Card className="col-span-4 sm:col-span-4 h-[300px]">
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

                <Card className="col-span-4 sm:col-span-4 h-[300px]">
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

                <Card className="col-span-4 sm:col-span-4 h-[300px]">
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
                    <CardBody className="z-10 flex-col !items-center text-center">
                        <p className="">
                            Their collection is legit. Whether you&apos;re climbing a mountain or just conquering the urban jungle, The Explorer&apos;s got you covered. It&apos;s not just clothes; it&apos;s a statement that says, &quot;I&apos;m ready for anything!&quot;
                        </p>
                    </CardBody>
                </Card>

                <Card className="col-span-4 sm:col-span-4 h-[300px]">
                    <CardHeader className="flex-col !items-center">
                        <Image
                            alt="nextui logo"
                            height={40}
                            radius="sm"
                            src="https://avatars.githubusercontent.com/u/86160567?s=200&v=4"
                            width={40}
                        />
                        <div className="text-center z-10 my-1.5">
                            <h2 className="text-xl">Jamie</h2>
                            <p>@OUTsideWJamie</p>
                        </div>
                    </CardHeader>
                    <Divider/>
                    <CardBody className="z-10 flex-col !items-center text-center">
                        <p className="">
                        And quality? It&apos;s like they&apos;ve got a PhD in making stuff that lasts. Fashion meets functionality, and it&apos;s a match made in clothing heaven. It&apos;s not just a look; it&apos;s a lifestyle that can keep up with your craziest adventures.
                        </p>
                    </CardBody>
                </Card>

                <Card className="col-span-4 sm:col-span-4 h-[300px]">
                    <CardHeader className="flex-col !items-center">
                        <Image
                            alt="nextui logo"
                            height={40}
                            radius="sm"
                            src="https://avatars.githubusercontent.com/u/86160567?s=200&v=4"
                            width={40}
                        />
                        <div className="text-center z-10 my-1.5">
                            <h2 className="text-xl">Tyler</h2>
                            <p>@tylers.closet</p>
                        </div>
                    </CardHeader>
                    <Divider/>
                    <CardBody className="z-10 flex-col !items-center text-center">
                        <p className="">
                        The whole shopping experience is like an adventure itself.  Social media is all about sharing your Explorer style. It&apos;s not just fashion; it&apos;s a community of like-minded explorers.
                            </p>
                    <CardBody className="z-10 flex-col !items-center">
                        <p className="my-5">Review text.</p>
                 </CardBody>
                </Card>
            </div>
        </>
    )
}

export default Reviews;