<?php

namespace Vanguard\Http\Controllers\Web\Users;

use Illuminate\Contracts\View\Factory;
use Illuminate\Http\Request;
use Illuminate\View\View;
use Vanguard\Http\Controllers\Controller;
use Vanguard\Repositories\Country\CountryRepository;
use Vanguard\Repositories\Role\RoleRepository;
use Vanguard\Repositories\User\UserRepository;
use Vanguard\Support\Enum\UserStatus;
use Vanguard\User;
use Vanguard\UserActivity\Repositories\Activity\ActivityRepository;

/**
 * Class ProfileController
 * @package Vanguard\Http\Controllers
 */
class ActivityController extends Controller
{




    private $activities;
    public function __construct(ActivityRepository $activities)
    {
        $this->activities = $activities;
    }

    public function index(User $user, Request $request)
    {
        $activities = $this->activities->paginateActivitiesForUser(
            $user->id,
            $perPage = 20,
            $request->search
        );

        return view('user-activity::index', [
            'user' => $user,
            'adminView' => true,
            'activities' => $activities
        ]);
    }

    /**
     * Display user's profile page.
     *
     * @return Factory|View
     */
//    public function show()
//    {
//        $roles = $this->roles->all()->filter(function ($role) {
//            return $role->id == auth()->user()->role_id;
//        })->pluck('name', 'id');
//
//        return view('user.profile', [
//            'user' => auth()->user(),
//            'edit' => true,
//            'roles' => $roles,
//            'countries' => [0 => __('Select a Country')] + $this->countries->lists()->toArray(),
//            'socialLogins' => $this->users->getUserSocialLogins(auth()->id()),
//            'statuses' => UserStatus::lists()
//        ]);
//    }

    public function show(Request $request)
    {
        $user = auth()->user();

        $activities = $this->activities->paginateActivitiesForUser(
            $user->id,
            $perPage = 20,
            $request->get('search')
        );

        return view('user-activity::index', compact('activities', 'user'));
    }
}
