<?php

$city = $_GET['city'];

$wiki_api_url = "https://en.wikipedia.org/api/rest_v1/page/summary/$city";
$wiki_response = file_get_contents($wiki_api_url);
$wiki_data = json_decode($wiki_response, true);

$openweather_api_url = "https://api.openweathermap.org/data/2.5/weather?q=$city&appid=YOUR_API_KEY";
$openweather_response = file_get_contents($openweather_api_url);
$openweather_data = json_decode($openweather_response, true);

$result = [
  'name' => $wiki_data['title'],
  'population' => $wiki_data['population'],
  'weather' => $openweather_data['weather'][0]['description'],
];

echo json_encode($result);
