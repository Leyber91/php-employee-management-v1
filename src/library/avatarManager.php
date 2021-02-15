<?php

define("AVATARS_JSON_PATH", $_SERVER["DOCUMENT_ROOT"] . "/php-employee-management-v1/resources/avatars.json");

require('helper.php');

function addAvatar(array $newAvatar)
{
    $avatars = decodeJsonFile(AVATARS_JSON_PATH);
    $newAvatar['id'] = end($avatars)['id'] + 1;
    array_push($avatars, $newAvatar);

    saveArrayAsJson(AVATARS_JSON_PATH, $avatars);
}

function deleteAvatar(string $id)
{
    $avatars = decodeJsonFile(AVATARS_JSON_PATH);
    $avatar = findItemWithId($avatars, $id);

    if ($avatar) {
        unset($avatars[$avatar->key]);
        saveArrayAsJson(AVATARS_JSON_PATH, $avatars);

        return true;
    } else {
        return false;
    }
}

function updateAvatar(array $updateAvatar)
{
    $avatars = decodeJsonFile(AVATARS_JSON_PATH);
    $avatar = findItemWithId($avatars, $updateAvatar['id']);

    if ($avatar) {
        $avatar->value = $updateAvatar;
    } else {
        array_push($avatars, $updateAvatar);
    }

    saveArrayAsJson(AVATARS_JSON_PATH, array_sort($avatars, 'id'));
}

function getAvatars(array $ids = [])
{
    if (empty($ids)) {
        return file_get_contents(AVATARS_JSON_PATH);
    }

    $avatars = decodeJsonFile(AVATARS_JSON_PATH);

    $foundAvatars = array();
    foreach ($ids as $id) {
        $found = findItemWithId($avatars, $id);
        if ($found) {
            array_push($foundAvatars, $found->value);
        }
    }

    return encodeJson(array_values($foundAvatars));
}

function removeAvatar($id)
{
    // TODO implement it
}

function getQueryStringParameters(): array
{
    // TODO implement it
    return  array();
}

function getNextIdentifier(array $employeesCollection): int
{
    // TODO implement it
    return 0;
}
