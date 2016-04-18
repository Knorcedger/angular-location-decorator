var locationDecorator = angular.module('locationDecorator', []);

locationDecorator.config(function($provide) {
	$provide.decorator('$location', function($delegate, $log) {
		var originalPath = $delegate.path;
		$delegate.path = function(value) {
			var result;

			if (value) {
				$log.debug('Redirect', value);
			}
			var path = originalPath.apply(this, arguments);
			if (path) {
				result = path;
			} else {
				result = this;
			}

			return result;
		};

		return $delegate;
	});
});
