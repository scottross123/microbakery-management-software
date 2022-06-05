import { Flex } from "@chakra-ui/react";

type ProfileProps = {
    user: string
}

const Profile = (props: ProfileProps) => {
    const { user } = props;

    return (
        <Flex
            justifyContent='center'
        >
            { user }
        </Flex>
    )
}

export default Profile;