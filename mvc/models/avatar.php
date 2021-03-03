<?php

class AvatarModel
{
    public $avatarJsonPath;

    function __construct()
    {
        $this->avatarJsonPath = "/Users/victorgreco/Documents/personal_projects/php-employee-management-v1/resources/avatars.json";
        require_once('/Users/victorgreco/Documents/personal_projects/php-employee-management-v1/src/library/helper.php');
    }

    public function addAvatar(array $newAvatar)
    {
        $avatars = decodeJsonFile($this->avatarJsonPath);
        $newAvatar['id'] = end($avatars)['id'] + 1;
        array_push($avatars, $newAvatar);
    
        saveArrayAsJson($this->avatarJsonPath, $avatars);
    
        return $newAvatar;
    }

    public function deleteAvatar(int $id)
    {
        $avatars = decodeJsonFile($this->avatarJsonPath);
        $avatar = findItemWithId($avatars, $id);

        if ($avatar) {
            unset($avatars[$avatar->key]);
            saveArrayAsJson($this->avatarJsonPath, $avatars);

            return true;
        } else {
            return false;
        }
    }

    public function updateAvatar(array $updateAvatar)
    {
        $avatars = decodeJsonFile($this->avatarJsonPath);
        $avatar = findItemWithId($avatars, $updateAvatar['id']);

        if ($avatar) {
            $avatar->value = $updateAvatar;
        } else {
            array_push($avatars, $updateAvatar);
        }

        saveArrayAsJson($this->avatarJsonPath, array_sort($avatars, 'id'));
        return $updateAvatar;
    }

    public function getAvatars(array $employeeIds = [])
    {

        if (empty($employeeIds)) {
            return file_get_contents($this->avatarJsonPath);
        }

        $avatars = decodeJsonFile($this->avatarJsonPath);

        $foundAvatars = array();
        foreach ($employeeIds as $id) {
            $found = findItemWithEmployeeId($avatars, $id);
            if ($found) {
                array_push($foundAvatars, $found->value);
            }
        }

        return encodeJson(array_values($foundAvatars));
    }

    public function getAvatar($employeeId)
    {
        $avatars = decodeJsonFile($this->avatarJsonPath);
        $found = findItemWithEmployeeId($avatars, $employeeId);
        $avatar = $found ? $found->value : array();

        return encodeJson($avatar);
    }
}





