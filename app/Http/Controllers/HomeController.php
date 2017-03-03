<?php
namespace App\Http\Controllers;
use Illuminate\Routing\Controller;

class HomeController extends Controller {

	public function showWelcome()
	{
		return View::make('hello');
	}

	public function getImage()
	{
		$im = file_get_contents('img/wall_1.jpg');
		header('content-type: image/gif');
		echo $im;
	}

}