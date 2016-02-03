(function () {

    /**
     * Created by wenjie on 2/1/16.
     */
    angular.module('app').filter('highlight', function ($sce) {
        //$sce: Strict Contextual Escaping
        return function (text, phrase) {
            if(!angular.isString(text)){
                return $sce.trustAsHtml(text.toString());
            }

            if (phrase) {
                text = text.replace(new RegExp('(' + phrase + ')', 'gi'), '<span class="highlighted">$1</span>');
            }
            return $sce.trustAsHtml(text)
        }
    });
}());