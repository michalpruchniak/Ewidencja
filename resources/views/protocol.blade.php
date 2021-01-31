<div>
<h1><center>Protokół przekazania</center></h1>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ut elit a felis convallis gravida in ac arcu. Duis tincidunt nulla sapien, condimentum condimentum metus vulputate a. Maecenas eget sem augue. In pharetra sodales tortor, a scelerisque nulla faucibus eget. Donec maximus augue tempus pretium ultricies. Quisque pulvinar lectus non sodales tincidunt. Etiam consequat lectus a nulla elementum placerat. Ut vulputate mauris eget mollis fermentum. Pellentesque convallis elit vel quam sagittis ultrices. Donec ipsum ligula, elementum sed pellentesque eu, interdum a lacus. Maecenas sollicitudin, sem eu feugiat volutpat, massa enim luctus ex, quis vestibulum tellus orci posuere ante. Duis cursus sem et metus finibus, ac congue eros cursus. Fusce sit amet tristique risus, eget dignissim ex.</p>

<p>Praesent ut arcu vitae quam tincidunt porta. Nunc mattis tincidunt magna sed sagittis. Vivamus in leo tincidunt, elementum neque sed, pulvinar sem. Proin sagittis semper orci vel interdum. Suspendisse ut erat velit. Sed turpis nisl, scelerisque et ligula in, dictum aliquet sapien. Integer nibh nunc, sollicitudin nec cursus sit amet, rutrum a leo. </p>
    <h2>Podstawa:</h2>
    {{ $protocol->basics }}
<h3>Urządzenia</h3>
@foreach($protocol->myDevices as $device)
    <span>{{ $device->name }} (<b>nr. inventarzowy:</b> {{$device->inventory}})</span><hr>
@endforeach
</div>
<br>
<table style="border: 1px solid black; width: 100%; text-align: center; height: 90px">
    <tr style="vertical-align: top;">
        <td>sporządził</td>
        <td>Zlecił</td>
        <td>Przyjął</td>
    </tr>
</table>