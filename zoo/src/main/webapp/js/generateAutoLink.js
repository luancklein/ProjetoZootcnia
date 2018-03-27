function generateLink(local)
{
	var url = window.location.href.toString();
	result = url.split ("/");
	a = 0;
	link = "";
	a = 2;
	if (result[-1] == "")
		{
			result.pop();
		}
	for (i in result)
		{
			if (i == (result.length-1))
				{
					break
				}
			else
				{
							link += result[i] + "/";
				}
		}
	link += local;
	return link;
}